import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

class Game extends React.Component {
  state = {
    homeScore: this.props.scores ? this.props.scores.homeScore.toString() : '', 
    awayScore: this.props.scores ? this.props.scores.awayScore.toString() : '', 
  };

  handleChangeHomeScore = (text) => {
    this.setState({ homeScore: text });
  };

  handleChangeAwayScore = (text) => {
    this.setState({ awayScore: text });
  };

  handleBlur = () => {
    const { gameNumber, homeTeam, awayTeam, addGame } = this.props;
    const { homeScore, awayScore } = this.state;

    if (homeScore !== '' && awayScore !== '') {
      const game = {
        gameNumber,
        homeTeam,
        awayTeam,
        homeScore: parseInt(homeScore),
        awayScore: parseInt(awayScore)
      };
      addGame(game);
    }
  };

  render() {
    const { homeTeam, awayTeam, homeTeamImage, awayTeamImage, gameNumber } = this.props;
    const { homeScore, awayScore } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Jogo {gameNumber}</Text>
        <View style={styles.gameContainer}>
          <View style={styles.teamContainer}>
            <Image source={homeTeamImage} style={styles.teamImage} />
            <Text style={styles.team}>{homeTeam}</Text>
          </View>
          <TextInput
            style={styles.input}
            value={homeScore}
            onChangeText={this.handleChangeHomeScore}
            onBlur={this.handleBlur}
            keyboardType="numeric"
          />
          <Text style={styles.vs}>x</Text>
          <TextInput
            style={styles.input}
            value={awayScore}
            onChangeText={this.handleChangeAwayScore}
            onBlur={this.handleBlur}
            keyboardType="numeric"
          />
          <View style={styles.teamContainer}>
            <Text style={styles.team}>{awayTeam}</Text>
            <Image source={awayTeamImage} style={styles.teamImage} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  team: {
    marginRight: 5,
  },
  vs: {
    marginHorizontal: 10,
  },
  input: {
    height: 28,
    width: 28,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  teamImage: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});

export default Game;