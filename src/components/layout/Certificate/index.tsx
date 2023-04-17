import { ICertificate } from '@/store/types'
import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { FC } from 'react'
import Container from './Container'
import Desc from './Desc'
import Tree from './Tree'

const Certificate: FC<{ data: ICertificate }> = ({ data }) => {
  return (
    <Container data={data}>
      <Section1 data={data} />
      <View style={styles.divider} />
      <Section2 data={data} />
      <Section3 data={data} />
      <Tree />
    </Container>
  )
}

export default Certificate

const Section1: FC<any> = ({ data }) => {
  const Section1 = [
    { title: 'Prefix and Name:', value: `${data.prefix} ${data.tag}` },
    { title: 'Issue Date:', value: data.issueDate },
    { title: 'Export Tag:', value: data.exportTag },
    { title: 'Registration Number:', value: data.registrationNum },
  ]

  return (
    <View style={styles.section1}>
      {Section1.map((props) => (
        <Desc {...props} key={props.value} />
      ))}
    </View>
  )
}

const Section2: FC<any> = ({ data }) => {
  const Section2 = {
    col1: [
      { title: 'Lambplan ID:', value: data.lambPlanId },
      { title: 'Tag Number:', value: data.tag },
    ],
    col2: [
      { title: 'Colour:', value: data.colour },
      { title: 'Conception:', value: data.conception },
    ],
    col3: [
      { title: 'Gender:', value: data.gender },
      { title: 'Grade:', value: data.grade },
    ],
    col4: { title: 'Birth Date:', value: data.birthDate },
  }

  return (
    <View style={styles.section2}>
      <View style={{ display: 'flex', gap: 8 }}>
        {Section2.col1.map((props) => (
          <Desc {...props} inline key={props.value} />
        ))}
      </View>
      <View style={{ display: 'flex', gap: 8 }}>
        {Section2.col2.map((props) => (
          <Desc {...props} inline capitalize key={props.value} />
        ))}
      </View>
      <View style={{ display: 'flex', gap: 8 }}>
        {Section2.col3.map((props) => (
          <Desc {...props} inline capitalize key={props.value} />
        ))}
      </View>
      <Desc {...Section2.col4} inline />
    </View>
  )
}

const Section3: FC<any> = ({ data }) => {
  const section3 = [
    { title: 'BREEDER:', value: data.breeder },
    { title: 'OWNER:', value: data.owner },
  ]

  return (
    <View style={styles.section3}>
      {section3.map((props) => (
        <View style={{ display: 'flex', gap: 8 }} key={props.value}>
          <Desc {...props} inline />
          <Text style={{ fontSize: 12 }}>2761 WANDANA ROAD YUNA WA 6532</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  section1: { display: 'flex', flexDirection: 'row', gap: 24 },
  section2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 630,
    marginBottom: 20,
  },
  section3: { display: 'flex', flexDirection: 'row', gap: 24 },
  divider: { height: 1, width: 630, backgroundColor: '#306E52' },
})
