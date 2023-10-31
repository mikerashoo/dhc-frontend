import React, { useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  index: number;
  setDefaultIndex: Function;
  defaultIndex: number;
  differentStyle?: boolean;
  paddingLeft?: boolean;
};
type Propss = {
  children: React.ReactElement[];
  onClickTabItem?: Function;
  differentStyle?: boolean;
  paddingLeft?: boolean;
};
export function Tab({
  title,
  index,
  defaultIndex,
  setDefaultIndex,
  differentStyle,
}: Props) {
  const clickToTab = (i: number) => {
    setDefaultIndex(i);
  };
  return (
    <li
      className={`${
        index === defaultIndex ? `${styles.activeTabListItem}` : ""
      } ${styles.tabListItem} ${
        differentStyle && index === defaultIndex
          ? styles.activeDifferentTabItem
          : ""
      }`}
      onClick={() => clickToTab(index)}
    >
      <span>{title}</span>
    </li>
  );
}

export default function Tabs({
  children,
  differentStyle,
  paddingLeft,
}: Propss) {
  const [defaultIndex, setDefaultIndex] = React.useState(0);
  return (
    <div className={`${styles.tabsComponents} shell`}>
      <div
        className={`${styles.tabsLinks} ${
          differentStyle ? styles.differentTabLinks : ""
        } tabsLinks`}
      >
        <ol className={`${styles.tabsList} ${paddingLeft ? styles.pl : ""}`}>
          {children.map((child: any, index: number) => (
            <Tab
              key={child.props.title}
              title={child.props.title}
              index={index}
              differentStyle={differentStyle}
              setDefaultIndex={setDefaultIndex}
              defaultIndex={defaultIndex}
            />
          ))}
        </ol>
        <span className={styles.tabLine}></span>
      </div>

      <div
        className={`${styles.tabsContent} ${
          differentStyle ? styles.differentTabsContent : ""
        } content`}
      >
        {children.map((child: React.ReactElement, index: number) => {
          if (index !== defaultIndex) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}
