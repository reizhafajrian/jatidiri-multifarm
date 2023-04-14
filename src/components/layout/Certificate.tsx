import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import { FC } from 'react'

const data = {
  organization: 'DORPER SHEEP SOCIETY OF AUSTRALIA INC',
  prefix: 'douwana',
  tag: '210759',
  issueDate: '21/09/2022',
  exportTag: 'BL4528',
  registrationNum: 'D048 210759',
  lambPlanId: '400048-2021-210759',
  colour: 'black',
  conception: 'natural',
  gender: 'Ram',
  grade: 'Fullblood',
  birthDate: '05/09/2021',
  breeder: 'D048 BATTEN FARMS',
  owner: 'D048 BATTEN FARMS',
  notes:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est porro praesentium tenetur ab omnis. Eveniet, perspiciatis hic vel facere illo earum aliquid dolores nemo reiciendis numquam perferendis dicta iste.',
}

const Certificate = () => {
  const Section1 = [
    { title: 'Prefix and Name:', value: `${data.prefix} ${data.tag}` },
    { title: 'Issue Date:', value: data.issueDate },
    { title: 'Export Tag:', value: data.exportTag },
    { title: 'Registration Number:', value: data.registrationNum },
  ]

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

  const info = [
    { title: 'BREEDER:', value: data.breeder },
    { title: 'OWNER:', value: data.owner },
  ]

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

            {/* Main */}
            <View style={styles.main}>
              {/* Section 1 */}
              <View style={styles.section1}>
                {Section1.map((props) => (
                  <Desc {...props} key={props.value} />
                ))}
              </View>

              {/* Divider */}
              <View style={styles.divider} />

              {/* Section 2 */}
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

              {/* Section Info */}
              <View style={styles.sectionInfo}>
                {info.map((props) => (
                  <View style={{ display: 'flex', gap: 8 }} key={props.value}>
                    <Desc {...props} inline />
                    <Text style={{ fontSize: 12 }}>
                      2761 WANDANA ROAD YUNA WA 6532
                    </Text>
                  </View>
                ))}
              </View>

              {/* Tree */}
              <View style={{ fontFamily: 'Helvetica-Bold', fontSize: 10 }}>
                <Node
                  nodeHeight={100}
                  lineHeight={84}
                  containerHeight={200}
                  gap={73}
                >
                  {/* node 1 */}
                  <Node noLine>
                    <Text>Sire: DOUWANA 160095 (ET) D048 160095</Text>

                    <Node lineHeight={42} nodeHeight={56} gap={24}>
                      {/* node 1-1 */}
                      <Node noLine>
                        <Text>S: KAYA 120727 D030 120727</Text>

                        <Node lineHeight={18} nodeHeight={28}>
                          {/* node 1-1-1 */}
                          <Node noLine>
                            <Text>S: KAYA 120727 D030 120727</Text>
                          </Node>

                          {/* node 1-1-2 */}
                          <Node noLine>
                            <Text>S: KAYA 120727 D030 120727</Text>
                          </Node>
                        </Node>
                      </Node>

                      {/* node 1-2 */}
                      <Node noLine>
                        <Text>S: KAYA 120727 D030 120727</Text>

                        <Node lineHeight={18} nodeHeight={28}>
                          {/* node 1-2-1 */}
                          <Node noLine>
                            <Text>S: KAYA 120727 D030 120727</Text>
                          </Node>

                          {/* node 1-2-2 */}
                          <Node noLine>
                            <Text>S: KAYA 120727 D030 120727</Text>
                          </Node>
                        </Node>
                      </Node>
                    </Node>
                  </Node>

                  {/* node 2 */}
                  <Node noLine>
                    <Text>Dam: DOUWANA 150142 (ET) D048 150142</Text>

                    <Node lineHeight={42} nodeHeight={56} gap={24}>
                      {/* node 2-1 */}
                      <Node noLine>
                        <Text>S: KAYA 120727 D030 120727</Text>

                        <Node lineHeight={18} nodeHeight={28}>
                          {/* node 2-1-1 */}
                          <Node noLine>
                            <Text>S: KAYA 120727 D030 120727</Text>
                          </Node>

                          {/* node 2-1-2 */}
                          <Node noLine>
                            <Text>S: KAYA 120727 D030 120727</Text>
                          </Node>
                        </Node>
                      </Node>

                      {/* node 2-2 */}
                      <Node noLine>
                        <Text>S: KAYA 120727 D030 120727</Text>

                        <Node lineHeight={18} nodeHeight={28}>
                          {/* node 2-2-1 */}
                          <Node noLine>
                            <Text>S: KAYA 120727 D030 120727</Text>
                          </Node>

                          {/* node 2-2-2 */}
                          <Node noLine>
                            <Text>S: KAYA 120727 D030 120727</Text>
                          </Node>
                        </Node>
                      </Node>
                    </Node>
                  </Node>
                </Node>
              </View>
            </View>
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

export default Certificate

interface NodeProps {
  children: React.ReactNode
  noLine?: boolean
  lineHeight?: number
  nodeHeight?: number
  containerHeight?: number
  gap?: number
}

const Node: FC<NodeProps> = (props) => {
  const { children, noLine, lineHeight, nodeHeight, containerHeight, gap } =
    props

  const s = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 18,
      alignItems: 'center',
      height: containerHeight ?? 'auto',
    },
    line: {
      height: lineHeight,
      width: 18,
      border: '1px solid black',
      borderRight: 'none',
      borderTopLeftRadius: 18,
      borderBottomLeftRadius: 18,
    },
    node: {
      display: 'flex',
      height: nodeHeight ?? 'auto',
      justifyContent: 'space-between',
      gap: gap ?? '0',
    },
  })

  return (
    <View style={s.container}>
      {noLine ? (
        children
      ) : (
        <>
          <View style={s.line} />
          <View style={s.node}>{children}</View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    paddingBottom: 40,
    paddingHorizontal: 32,
    fontFamily: 'Helvetica',
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    padding: '24px 0 40px 0',
    display: 'flex',
    flexDirection: 'row',
    gap: '32px',
  },
  logo1: { height: 60, width: 45 },
  logo2: { height: 60, width: 60 },
  title: {
    fontSize: '20px',
    fontFamily: 'Helvetica-Bold',
    marginBottom: '10px',
  },
  subtitle: { fontSize: '24px', fontFamily: 'Times-Roman' },
  main: { display: 'flex', gap: 12 },
  divider: { height: 1, width: 630, backgroundColor: '#306E52' },
  section1: { display: 'flex', flexDirection: 'row', gap: 24 },
  section2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 630,
    marginBottom: 20,
  },
  sectionInfo: { display: 'flex', flexDirection: 'row', gap: 24 },
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
  treeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
    height: 200,
  },
  tree_rootLine: {
    height: 90,
    width: 18,
    border: '1px solid black',
    borderRight: 'none',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  tree_rootNode: {
    fontFamily: 'Helvetica-Bold',
    display: 'flex',
    height: 100,
    justifyContent: 'space-between',
    gap: 60,
    fontSize: 10,
  },
  tree_rootNodeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  tree_secondNode: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  tree_secondNodeLine: {
    height: 32,
    width: 8,
    border: '1px solid black',
    borderRight: 'none',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  tree_secondNodeContainer: {
    display: 'flex',
    height: 45,
    justifyContent: 'space-between',
    fontSize: 10,
  },
})

interface DescProps {
  title: string
  value: string
  inline?: boolean
  capitalize?: boolean
}

const Desc: FC<DescProps> = ({ title, value, inline, capitalize }) => {
  const descStyles = StyleSheet.create({
    container: !inline
      ? { fontSize: 12 }
      : {
          fontSize: 12,
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
        },
    title: {
      fontFamily: 'Helvetica-Bold',
      marginBottom: !inline ? 4 : 0,
    },
    value: {
      textTransform: capitalize ? 'capitalize' : 'uppercase',
    },
  })

  return (
    <View style={descStyles.container}>
      <Text style={descStyles.title}>{title}</Text>
      <Text style={descStyles.value}>{value}</Text>
    </View>
  )
}
