const Login = {
  email: 'admin@admin.com',
  password: 'secret_admin',
};

const userMock = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
};

const userMockTeams = [
  {
    id: 1,
    teamName: 'Avaí/Kindermann',
  },
  {
    id: 2,
    teamName: 'Bahia',
  },
  {
    id: 3,
    teamName: 'Botafogo',
  },
  {
    id: 4,
    teamName: 'Corinthians',
  },
];

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQ1NjY3MDd9.WVUGM9RepbqetXGY2Lj1Pw0M02Q9brws3uzbK3RMfaw';

const validate = { role: 'admin', iat: 1664566707 };

const matcheMock = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: 1,
    teamHome: {
      id: 16,
      teamName: 'São Paulo',
    },
    teamAway: {
      id: 8,
      teamName: 'Grêmio',
    },
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: 0,
    teamHome: {
      id: 9,
      teamName: 'Internacional',
    },
    teamAway: {
      id: 14,
      teamName: 'Santos',
    },
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: 0,
    teamHome: {
      id: 4,
      teamName: 'Corinthians',
    },
    teamAway: {
      id: 11,
      teamName: 'Napoli-SC',
    },
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: 0,
    teamHome: {
      id: 3,
      teamName: 'Botafogo',
    },
    teamAway: {
      id: 2,
      teamName: 'Bahia',
    },
  },
];

const matcheNotInProgressMock = [
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: 0,
    teamHome: {
      id: 9,
      teamName: 'Internacional',
    },
    teamAway: {
      id: 14,
      teamName: 'Santos',
    },
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: 0,
    teamHome: {
      id: 4,
      teamName: 'Corinthians',
    },
    teamAway: {
      id: 11,
      teamName: 'Napoli-SC',
    },
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: 0,
    teamHome: {
      id: 3,
      teamName: 'Botafogo',
    },
    teamAway: {
      id: 2,
      teamName: 'Bahia',
    },
  },
];

export const newMatcheMock = {
    "homeTeam": 16,
    "awayTeam": 8,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2
  }

export const newMatcheCreatedMock = {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 8,
    "awayTeamGoals": 2,
    "inProgress": true,
  }

export {
  Login,
  userMock,
  userMockTeams,
  token,
  validate,
  matcheMock,
  matcheNotInProgressMock,
};
