import { FC } from "react"
import { Text, View } from "@react-pdf/renderer"

import Node from "./Node"

const Tree: FC = () => {
  return (
    <View style={{ fontFamily: "Helvetica-Bold", fontSize: 10 }}>
      <Node nodeHeight={100} lineHeight={84} containerHeight={200} gap={73}>
        <Nodes sire="DOUWANA 160095 (ET) D048 160095" />
        <Nodes dam="DOUWANA 160095 (ET) D048 160095" />
      </Node>
    </View>
  )
}

export default Tree

interface INodes {
  sire?: string
  dam?: string
}

const Nodes: FC<INodes> = ({ sire, dam }) => {
  return (
    <Node noLine>
      <Text>{sire ? `Sire: ${sire}` : `Dam: ${dam}`}</Text>

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
              <Text>D: KAYA 120727 D030 120727</Text>
            </Node>
          </Node>
        </Node>

        {/* node 1-2 */}
        <Node noLine>
          <Text>D: KAYA 120727 D030 120727</Text>

          <Node lineHeight={18} nodeHeight={28}>
            {/* node 1-2-1 */}
            <Node noLine>
              <Text>S: KAYA 120727 D030 120727</Text>
            </Node>

            {/* node 1-2-2 */}
            <Node noLine>
              <Text>D: KAYA 120727 D030 120727</Text>
            </Node>
          </Node>
        </Node>
      </Node>
    </Node>
  )
}
