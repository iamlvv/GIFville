export interface IGifDetails {
  id: string;
  title: string;
  user: IUserDetails;
  url: string;
  trending_datetime: string;
  rating: string;
  original: {
    url: string;
    width: string;
    height: string;
    size: string;
  };
}

export interface IUserDetails {
  avatar_url: string;
  description: string;
  username: string;
  is_verified: boolean;
}
