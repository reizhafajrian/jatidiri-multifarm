import { Icons as I } from "@/components/ui/Icons"

export const setCategories = (c: any) => [
  {
    category: "feed",
    cardList: [
      {
        title: "Jenis Pakan",
        value: c.feedInfo?.feed_type,
        label: "Jenis",
        icon: <I.feedCircle />,
      },
      {
        title: "Total Penggunaan",
        value: c.feedInfo?.used,
        label: "Kilogram",
        icon: <I.calcCircle />,
      },
      {
        title: "Total Stock",
        value: c.feedInfo?.total_stocks,
        label: "Kilogram",
        icon: <I.calcCircle />,
      },
    ],
  },
  {
    category: "vitamin",
    cardList: [
      {
        title: "Sapi",
        value: c.vitaminInfo?.find((v: any) => v.animal === "cow")?.total,
        icon: <I.cowCircle />,
      },
      {
        title: "Domba",
        value: c.vitaminInfo?.find((v: any) => v.animal === "sheep")?.total,
        icon: <I.sheepCircle />,
      },
      {
        title: "Kambing",
        value: c.vitaminInfo?.find((v: any) => v.animal === "goat")?.total,
        icon: <I.goatCircle />,
      },
    ],
  },
  {
    category: "vaccine",
    cardList: [
      {
        title: "Sapi",
        value: c.vaccineInfo?.find((v: any) => v.animal === "cow")?.total,
        icon: <I.cowCircle />,
      },
      {
        title: "Domba",
        value: c.vaccineInfo?.find((v: any) => v.animal === "sheep")?.total,
        icon: <I.sheepCircle />,
      },
      {
        title: "Kambing",
        value: c.vaccineInfo?.find((v: any) => v.animal === "goat")?.total,
        icon: <I.goatCircle />,
      },
    ],
    data: c.vaccineList,
  },
  {
    category: "anthelmintic",
    cardList: [
      {
        title: "Sapi",
        value: c.anthelminticInfo?.find((v: any) => v.animal === "cow")?.total,
        icon: <I.cowCircle />,
      },
      {
        title: "Domba",
        value: c.anthelminticInfo?.find((v: any) => v.animal === "sheep")
          ?.total,
        icon: <I.sheepCircle />,
      },
      {
        title: "Kambing",
        value: c.anthelminticInfo?.find((v: any) => v.animal === "goat")?.total,
        icon: <I.goatCircle />,
      },
    ],
  },
]
