import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { FC } from 'react'

interface DescProps {
  title: string
  value: string
  inline?: boolean
  capitalize?: boolean
}

const Desc: FC<DescProps> = ({ title, value, inline, capitalize }) => {
  return (
    <View style={inline ? styles.containerInline : styles.container}>
      <Text style={inline ? styles.titleInline : styles.title}>{title}</Text>
      <Text style={capitalize ? styles.valueCapitalize : styles.value}>
        {value}
      </Text>
    </View>
  )
}

export default Desc

const styles = StyleSheet.create({
  containerInline: {
    gap: 2,
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Helvetica-Bold',
  },
  container: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
  },
  titleInline: {
    marginBottom: 0,
  },
  title: {
    marginBottom: 4,
  },
  value: {
    textTransform: 'uppercase',
  },
  valueCapitalize: {
    textTransform: 'capitalize',
  },
})
