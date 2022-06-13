export interface FeedbackClick {
  rating: number,
  lang: string
}

export interface ShownFeedback {
  lang: string,
  status: number
}

export interface ActionOnLangPref {
  lang: string,
  newLanguage: string
}

export interface PrefAutoPopup {
  value: number
}

export interface SetLangCookie {
  lang: string,
}

export interface ShownPageLang {
  lang: string
}

export interface ExpValue {
  value: string
}
