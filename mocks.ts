/* eslint-disable */
import { faker } from '@faker-js/faker';
import { Event, MeetingEvent, OtherEvent, Query, User } from './types';

faker.seed(0);

export const anEvent = (overrides?: Partial<Event>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Event' } & Event => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Event');
    return {
        __typename: 'Event',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : faker.lorem.word(),
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : faker.lorem.word(),
        timeZone: overrides && overrides.hasOwnProperty('timeZone') ? overrides.timeZone! : faker.lorem.word(),
    };
};

export const aMeetingEvent = (overrides?: Partial<MeetingEvent>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'MeetingEvent' } & MeetingEvent => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('MeetingEvent');
    return {
        __typename: 'MeetingEvent',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : faker.lorem.word(),
        event: overrides && overrides.hasOwnProperty('event') ? overrides.event! : aMeetingEvent() || anOtherEvent(),
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : faker.lorem.word(),
        timeZone: overrides && overrides.hasOwnProperty('timeZone') ? overrides.timeZone! : faker.lorem.word(),
    };
};

export const anOtherEvent = (overrides?: Partial<OtherEvent>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'OtherEvent' } & OtherEvent => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('OtherEvent');
    return {
        __typename: 'OtherEvent',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : faker.lorem.word(),
        somethingElse: overrides && overrides.hasOwnProperty('somethingElse') ? overrides.somethingElse! : faker.lorem.word(),
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : faker.lorem.word(),
        timeZone: overrides && overrides.hasOwnProperty('timeZone') ? overrides.timeZone! : faker.lorem.word(),
    };
};

export const aQuery = (overrides?: Partial<Query>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Query' } & Query => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Query');
    return {
        __typename: 'Query',
        getUser: overrides && overrides.hasOwnProperty('getUser') ? overrides.getUser! : relationshipsToOmit.has('User') ? {} as User : aUser({}, relationshipsToOmit),
    };
};

export const aUser = (overrides?: Partial<User>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'User' } & User => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('User');
    return {
        __typename: 'User',
        events: overrides && overrides.hasOwnProperty('events') ? overrides.events! : [aMeetingEvent() || anOtherEvent()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.lorem.word(),
    };
};

export const seedMocks = (seed: number) => faker.seed(seed);
