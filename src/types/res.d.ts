interface Avatar {
  url: string;
  _id: string;
}

export interface Team {
  _id: string;
  name: string;
  social_media: string;
  job_position: string;
  avatar: Avatar;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ShowReelItem {
  _id: string;
  title: string;
  client_name: string;
  showreel_category_id: string;
  video_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ShowReel {
  _id: string;
  name: string;
  data: ShowReelItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface HTTPErrorMessage {
  message: string;
  stringValue: string;
  valueType: string;
  kind: string;
  path: string;
  value: string;
  reason: { unknown };
  name: string;
}

export interface HTTPError {
  status?: number;
  statusText?: string;
  url?: string;
  message?: HTTPErrorMessage;
}

export interface Logo {
  _id: string;
  url: string;
}

export interface ClientLogo {
  _id: string;
  logo: Logo;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
