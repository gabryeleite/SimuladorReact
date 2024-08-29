import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, View, Button, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Game from './src/Game';
import StandingsScreen from './src/StandingsScreen';

const Tab = createMaterialBottomTabNavigator();

const teams = [
  'AMA', 'AME', 'AVA', 'BRU', 'BSP',
  'CEA', 'CFC', 'CHA', 'CRB', 'GOI',
  'GUA', 'ITU', 'MIR', 'NOV', 'OPE',
  'PAY', 'PON', 'SAN', 'SPT', 'VNO'
];

class App extends React.Component {
  state = {
    games: [],
    standings: teams.map(team => ({ name: team, points: 0 })),
    scores: {},
  };

  addGame = (game) => {
    const { games, scores } = this.state;
    const updatedGames = [...games, game];
    const updatedScores = { ...scores, [game.gameNumber]: { homeScore: game.homeScore, awayScore: game.awayScore } };

    this.setState({ games: updatedGames, scores: updatedScores });
  };

  sendResults = () => {
    this.calculateStandings();
  };

  calculateStandings = () => {
    const { games } = this.state;
    const updatedStandings = teams.map(team => ({ name: team, points: 0 }));

    games.forEach(game => {
      const { homeTeam, awayTeam, homeScore, awayScore } = game;
      const homeIndex = updatedStandings.findIndex(team => team.name === homeTeam);
      const awayIndex = updatedStandings.findIndex(team => team.name === awayTeam);
      if (homeScore > awayScore) {
        updatedStandings[homeIndex].points += 3;
      } else if (homeScore < awayScore) {
        updatedStandings[awayIndex].points += 3;
      } else {
        updatedStandings[homeIndex].points += 1;
        updatedStandings[awayIndex].points += 1;
      }
    });

    updatedStandings.sort((a, b) => b.points - a.points);

    this.setState({ standings: updatedStandings });
  };

  render() {
    const teamImages = {
      AMA: require('./images/AMA.png'), AME: require('./images/AME.png'), AVA: require('./images/AVA.png'),
      BRU: require('./images/BRU.png'), BSP: require('./images/BSP.png'), CEA: require('./images/CEA.png'),
      CFC: require('./images/CFC.png'), CHA: require('./images/CHA.png'), CRB: require('./images/CRB.png'),
      GOI: require('./images/GOI.png'), GUA: require('./images/GUA.png'), ITU: require('./images/ITU.png'),
      MIR: require('./images/MIR.png'), NOV: require('./images/NOV.png'), OPE: require('./images/OPE.png'),
      PAY: require('./images/PAY.png'), PON: require('./images/PON.png'), SAN: require('./images/SAN.png'),
      SPT: require('./images/SPT.png'), VNO: require('./images/VNO.png'),
    };

    return (
      <NavigationContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()} accessible={false}>
          <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'green', paddingVertical: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Brasileirão Série B</Text>
            </View>
            <Tab.Navigator>
              <Tab.Screen name="Rodada 1">
                {() => (
                  <ScrollView>
                    <Game gameNumber={1} homeTeam={teams[0]} awayTeam={teams[1]} addGame={this.addGame} homeTeamImage={teamImages[teams[0]]} awayTeamImage={teamImages[teams[1]]} />
                    <Game gameNumber={2} homeTeam={teams[2]} awayTeam={teams[3]} addGame={this.addGame} homeTeamImage={teamImages[teams[2]]} awayTeamImage={teamImages[teams[3]]} />
                    <Game gameNumber={3} homeTeam={teams[4]} awayTeam={teams[5]} addGame={this.addGame} homeTeamImage={teamImages[teams[4]]} awayTeamImage={teamImages[teams[5]]} />
                    <Game gameNumber={4} homeTeam={teams[6]} awayTeam={teams[7]} addGame={this.addGame} homeTeamImage={teamImages[teams[6]]} awayTeamImage={teamImages[teams[7]]} />
                    <Game gameNumber={5} homeTeam={teams[8]} awayTeam={teams[9]} addGame={this.addGame} homeTeamImage={teamImages[teams[8]]} awayTeamImage={teamImages[teams[9]]} />
                    <Game gameNumber={6} homeTeam={teams[10]} awayTeam={teams[11]} addGame={this.addGame} homeTeamImage={teamImages[teams[10]]} awayTeamImage={teamImages[teams[11]]} />
                    <Game gameNumber={7} homeTeam={teams[12]} awayTeam={teams[13]} addGame={this.addGame} homeTeamImage={teamImages[teams[12]]} awayTeamImage={teamImages[teams[13]]} />
                    <Game gameNumber={8} homeTeam={teams[14]} awayTeam={teams[15]} addGame={this.addGame} homeTeamImage={teamImages[teams[14]]} awayTeamImage={teamImages[teams[15]]} />
                    <Game gameNumber={9} homeTeam={teams[16]} awayTeam={teams[17]} addGame={this.addGame} homeTeamImage={teamImages[teams[16]]} awayTeamImage={teamImages[teams[17]]} />
                    <Game gameNumber={10} homeTeam={teams[18]} awayTeam={teams[19]} addGame={this.addGame} homeTeamImage={teamImages[teams[18]]} awayTeamImage={teamImages[teams[19]]} />
                    <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
                      <View style={{ width: 150 }}>
                        <Button title="Computar" onPress={this.sendResults} color="#808080"/>
                      </View>
                    </View>
                  </ScrollView>
                )}
              </Tab.Screen>
              <Tab.Screen name="Rodada 2">
                {() => (
                  <ScrollView>
                    <Game gameNumber={1} homeTeam={teams[8]} awayTeam={teams[19]} addGame={this.addGame} homeTeamImage={teamImages[teams[8]]} awayTeamImage={teamImages[teams[19]]} />
                    <Game gameNumber={2} homeTeam={teams[13]} awayTeam={teams[6]} addGame={this.addGame} homeTeamImage={teamImages[teams[13]]} awayTeamImage={teamImages[teams[6]]} />
                    <Game gameNumber={3} homeTeam={teams[18]} awayTeam={teams[2]} addGame={this.addGame} homeTeamImage={teamImages[teams[18]]} awayTeamImage={teamImages[teams[2]]} />
                    <Game gameNumber={4} homeTeam={teams[0]} awayTeam={teams[15]} addGame={this.addGame} homeTeamImage={teamImages[teams[0]]} awayTeamImage={teamImages[teams[15]]} />
                    <Game gameNumber={5} homeTeam={teams[9]} awayTeam={teams[4]} addGame={this.addGame} homeTeamImage={teamImages[teams[9]]} awayTeamImage={teamImages[teams[4]]} />
                    <Game gameNumber={6} homeTeam={teams[17]} awayTeam={teams[3]} addGame={this.addGame} homeTeamImage={teamImages[teams[17]]} awayTeamImage={teamImages[teams[3]]} />
                    <Game gameNumber={7} homeTeam={teams[12]} awayTeam={teams[11]} addGame={this.addGame} homeTeamImage={teamImages[teams[12]]} awayTeamImage={teamImages[teams[11]]} />
                    <Game gameNumber={8} homeTeam={teams[7]} awayTeam={teams[16]} addGame={this.addGame} homeTeamImage={teamImages[teams[7]]} awayTeamImage={teamImages[teams[16]]} />
                    <Game gameNumber={9} homeTeam={teams[14]} awayTeam={teams[5]} addGame={this.addGame} homeTeamImage={teamImages[teams[14]]} awayTeamImage={teamImages[teams[5]]} />
                    <Game gameNumber={10} homeTeam={teams[10]} awayTeam={teams[1]} addGame={this.addGame} homeTeamImage={teamImages[teams[10]]} awayTeamImage={teamImages[teams[1]]} />
                    <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
                      <View style={{ width: 150 }}>
                        <Button title="Computar" onPress={this.sendResults} color="#808080" />
                      </View>
                    </View>
                  </ScrollView>
                )}
              </Tab.Screen>
              <Tab.Screen name="Classificação">
                {() => <StandingsScreen standings={this.state.standings} />}
              </Tab.Screen>
            </Tab.Navigator>
          </View>
        </TouchableWithoutFeedback>
      </NavigationContainer>
    );
  }
}

export default App;