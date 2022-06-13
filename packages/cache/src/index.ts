import NodeCache from 'node-cache';


const STD_TTL = 600;
const settingsForNodeCache = {
  stdTTL: STD_TTL,
  deleteOnExpiry: false,
  // * the additional 10 seconds is critical for the functioning of expiry watchers
  // ? This is because if the TTL and "checkperiod" are same,
  // the expiry watcher sometimes fails to notice the expired keys...
  checkperiod: STD_TTL + 10,
};

class Cache {
  private cache: any;

  private expiryWatchers: Function[];

  public constructor() {
    this.cache = new NodeCache(settingsForNodeCache);
    this.expiryWatchers = [];

    this.cache.on('expired', (key: string, value: any) => {
      this.expiryWatchers.forEach((watcher) => {
        watcher(this.cache, key, value);
      });
    });
  }

  public set(key: string, data: any) {
    if ((!key)) {
      throw new Error('Invalid Key');
    }

    const success = this.cache?.set(key, data);

    if (success) {
      return true;
    }

    return false;
  }

  public setWithTTL(key: string, data: any, ttl: number) {
    if (!key) {
      throw new Error('Invalid Key');
    }

    const success = this.cache?.set(key, data, ttl);

    if (success) {
      return true;
    }

    return false;
  }


  public get(key: string) {
    if (!key) {
      throw new Error('Invalid key requested');
    }

    try {
      const value = this.cache?.get(key);
      return value;
    } catch (e) {
      throw new Error('Error fetching key from Cache');
    }
  }

  public deleteKey(key: string) {
    if (!key) {
      throw new Error('Invalid key requested for delete');
    }

    return this.cache?.del(key);
  }

  public addExpiryWatcher(watcher: Function) {
    if ((!watcher) || (typeof watcher !== 'function')) {
      throw new Error(`Watcher has to be a function passed ${watcher}`);
    }

    this.expiryWatchers.push(watcher);
  }
}

export default Cache;
