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
    inProgress: 1,
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

  const teste = {
    dataValues: {
      id: 83,
      homeTeam: 6,
      homeTeamGoals: 1,
      awayTeam: 2,
      awayTeamGoals: 1,
      inProgress: 0
    },};

export const BoardMock = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: 0,
    'teamHome.id': 16,
    'teamHome.teamName': 'São Paulo'
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: 0,
    'teamHome.id': 9,
    'teamHome.teamName': 'Internacional'
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: 0,
    'teamHome.id': 4,
    'teamHome.teamName': 'Corinthians'
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: 0,
    'teamHome.id': 3,
    'teamHome.teamName': 'Botafogo'
  },
  {
    id: 5,
    homeTeam: 7,
    homeTeamGoals: 1,
    awayTeam: 10,
    awayTeamGoals: 1,
    inProgress: 0,
    'teamHome.id': 7,
    'teamHome.teamName': 'Flamengo'
  },
  {
    id: 6,
    homeTeam: 5,
    homeTeamGoals: 1,
    awayTeam: 13,
    awayTeamGoals: 1,
    inProgress: 0,
    'teamHome.id': 5,
    'teamHome.teamName': 'Cruzeiro'
  },
  {
    id: 7,
    homeTeam: 12,
    homeTeamGoals: 2,
    awayTeam: 6,
    awayTeamGoals: 2,
    inProgress: 0,
    'teamHome.id': 12,
    'teamHome.teamName': 'Palmeiras'
  },
  {
    id: 8,
    homeTeam: 15,
    homeTeamGoals: 0,
    awayTeam: 1,
    awayTeamGoals: 1,
    inProgress: 0,
    'teamHome.id': 15,
    'teamHome.teamName': 'São José-SP'
  },
]

export {
  Login,
  userMock,
  userMockTeams,
  token,
  validate,
  matcheMock,
  matcheNotInProgressMock,
};
