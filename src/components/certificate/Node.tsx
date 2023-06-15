import { FC } from "react"
import { StyleSheet, View } from "@react-pdf/renderer"

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
      display: "flex",
      flexDirection: "row",
      gap: 18,
      alignItems: "center",
      height: containerHeight ?? "auto",
    },
    line: {
      height: lineHeight,
      width: 18,
      border: "1px solid black",
      borderRight: "none",
      borderTopLeftRadius: 18,
      borderBottomLeftRadius: 18,
    },
    node: {
      display: "flex",
      height: nodeHeight ?? "auto",
      justifyContent: "space-between",
      gap: gap ?? "0",
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

export default Node
