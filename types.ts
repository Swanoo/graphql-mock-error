/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Event = {
  endDate?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
};

export type MeetingEvent = Event & {
  __typename: 'MeetingEvent';
  endDate?: Maybe<Scalars['String']['output']>;
  event: MeetingEvent | OtherEvent;
  startDate?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
};

export type OtherEvent = Event & {
  __typename: 'OtherEvent';
  endDate?: Maybe<Scalars['String']['output']>;
  somethingElse: Scalars['String']['output'];
  startDate?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename: 'Query';
  getUser?: Maybe<User>;
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename: 'User';
  events?: Maybe<Array<MeetingEvent | OtherEvent>>;
  id: Scalars['String']['output'];
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename: 'Query', getUser?: { __typename: 'User', id: string, events?: Array<{ __typename: 'MeetingEvent', startDate?: string | null, endDate?: string | null } | { __typename: 'OtherEvent', startDate?: string | null, endDate?: string | null }> | null } | null };
