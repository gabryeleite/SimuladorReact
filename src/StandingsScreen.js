import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class StandingsScreen extends React.Component {
  render() {
    const { standings } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Classificação</Text>
          <View style={styles.table}>
            <View style={styles.header}>
              <Text style={[styles.label, styles.rank]}>Ranking</Text>
              <Text style={[styles.label, styles.team]}>Clube</Text>
              <Text style={[styles.label, styles.points]}>Pontos</Text>
            </View>
            {standings.map((team, index) => (
              <View style={[styles.row, index < 4 ? styles.blue : index >= standings.length - 4 ? styles.red : null]} key={index}>
                <Text style={styles.rank}>{index + 1}º</Text>
                <Text style={styles.team}>{TeamNames[team.name]}</Text>
                <Text style={styles.points}>{team.points}</Text>
              </View>
            ))}
          </View>
          <View style={styles.legendContainer}>
            <View style={[styles.legend, styles.blueLegend]} />
            <Text style={styles.legendText}>Promoção   </Text>
            <View style={[styles.legend, styles.redLegend]} />
            <Text style={styles.legendText}>Rebaixamento</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const TeamNames = {
  AMA: 'Amazonas-FC', AME: 'América-MG', AVA: 'Avaí', BRU: 'Brusque',
  BSP: 'Botafogo-SP', CEA: 'Ceará', CFC: 'Coritiba', CHA: 'Chapecoense',
  CRB: 'CRB', GOI: 'Goiás', GUA: 'Guarani', ITU: 'Ituano', MIR: 'Mirassol',
  NOV: 'Novorizontino', OPE: 'Operário-PR', PAY: 'Paysandu', PON: 'Ponte Preta',
  SAN: 'Santos', SPT: 'Sport Recife', VNO: 'Vila Nova',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  table: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rank: {
    flex: 1,
    textAlign: 'center',
  },
  team: {
    flex: 3,
    textAlign: 'center',
  },
  points: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  blue: {
    backgroundColor: '#add8e6',
    color: 'white',
  },
  red: {
    backgroundColor: '#ff9999', 
    color: 'white',
  },
  legendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  legend: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  blueLegend: {
    backgroundColor: '#add8e6',
  },
  redLegend: {
    backgroundColor: '#ff9999',
  },
  legendText: {
    fontSize: 14,
  },
});

export default StandingsScreen;
