export interface Event
{
  eventId: number,
  eventName: string,
  competitionId: number,
  eventStartTime: Date,
  eventStatus: string,
  eventPeriod: string,
  result: string,
  homeTeam: string,
  awayTeam: string,
  yellowCardsHomeTeam: number,
  yellowCardsAwayTeam: number,
  redCardsHomeTeam: number,
  redCardsAwayTeam: number
}
