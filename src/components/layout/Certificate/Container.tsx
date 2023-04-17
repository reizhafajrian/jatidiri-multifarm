import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren & { data: any }> = ({
  children,
  data,
}) => {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.content}>
          <View>
            {/* Header */}
            <View style={styles.header}>
              <Image src="/certificate-logo1.png" style={styles.logo1} />
              <Image src="/certificate-logo2.png" style={styles.logo2} />
              <View>
                <Text style={styles.title}>{data.organization}</Text>
                <Text style={styles.subtitle}>Certificate of Registration</Text>
              </View>
            </View>

            {/* Main Content */}
            <View style={styles.main}>{children}</View>
          </View>

          {/*Green Accent */}
          <Image
            src="/certificate-accent.png"
            style={{ height: 329, width: 87 }}
          />
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <View style={{ width: 450 }}>
            <Text style={{ fontFamily: 'Helvetica-Bold', marginBottom: 8 }}>
              Free Text:
            </Text>
            <Text style={{ fontWeight: 'light' }}>{data.notes}</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
            <Text style={{ fontFamily: 'Helvetica-Bold' }}>Signed:</Text>
            <View style={{ textAlign: 'center', width: 200 }}>
              <View style={styles.signLine} />
              <Text>Name</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Container

const styles = StyleSheet.create({
  page: {
    paddingBottom: 40,
    paddingHorizontal: 32,
    fontFamily: 'Helvetica',
    display: 'flex',
    justifyContent: 'space-between',
  },

  //   header styles
  header: {
    padding: '24px 0 40px 0',
    display: 'flex',
    flexDirection: 'row',
    gap: '32px',
  },
  logo1: { height: 60, width: 45 },
  logo2: { height: 60, width: 60 },
  title: {
    fontSize: '18px',
    fontFamily: 'Helvetica-Bold',
    marginBottom: '10px',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '24px',
    fontFamily: 'Times-Roman',
  },

  //   container styles
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main: { display: 'flex', gap: 12 },

  //   footer styles
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    fontSize: 10,
  },
  signLine: {
    borderBottom: '1px dashed black',
    height: 15,
    width: '100%',
    marginBottom: 8,
  },
})
