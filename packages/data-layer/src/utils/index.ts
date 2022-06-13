interface Data {
  [dataKey: string]: any;
}

interface DataWithEvent extends Data{
  event: string;
}

const pushToGtmDatalayer = (data: (Data | DataWithEvent)) => {
  let { dataLayer } = window;
  // ! dataLayer - CAPITAL "L"
  if (!dataLayer) {
    window.dataLayer = [];
    ({ dataLayer } = window);
  }
  if (typeof data === 'object') {
    dataLayer.push(data);
  }
};

const pushToLaunchDatalayer = (data: (Data | DataWithEvent), reset = false) => {
  // ! datalayer - lowercase "l"
  if (!window.datalayer || reset) {
    // persisting spaPageView as it trigger page view
    const { spaPageView } = window.datalayer || {};
    window.datalayer = { spaPageView };
  }

  if (typeof data === 'object') {
    window.datalayer = Object.assign(window.datalayer, data);
  }
};

export const pushData = (data: (Data | DataWithEvent), reset = false) => {
  if (typeof data !== 'object') {
    throw new Error(`Invalid "data"! expected type "object", but got ${typeof data}`);
  }

  pushToGtmDatalayer(data);
  pushToLaunchDatalayer(data, reset);
};


export const pushEvent = (eventName: string, data?: Data) => {
  if (!eventName) {
    throw new Error(`"eventName" is required, you passed: ${eventName}`);
  }

  if (typeof eventName !== 'string') {
    throw new Error(`"eventName" has to be of type "string", passed: ${typeof eventName}`);
  }

  const eventWithData = {
    event: eventName,
    ...data,
  };

  pushData(eventWithData);
};
