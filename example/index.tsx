import React from "react";
import { Interface } from "readline";
import { Edu, Address, Sex } from './types';
export interface DemoProps {
  /**
   * @title 名称
   */
  name: string;
  /**
   * @title 年龄
   */
  age: number;
  /**
   * @title 性别
   * @enumNames ["男", "女"]
   */
  sex: Sex;
  /**
   * @title 是否婚配
   */
  marry?: boolean;
  /**
   * @title 地址
   */
  address?: Address;
  /**
   * @title 教育经历
   */
  edus?: {
    /**
     * @title 学校
     */
    school?: string;
    /**
     * @title 时间
     * @format date
     */
    date?: string;
  }[];
}

/**
 * Demo
 */
export default class Demo extends React.Component<DemoProps> {
  static defaultProps: DemoProps = {
    name: "张三",
    age: 18,
    sex: "M"
  };

  render() {
    return <div />
  }
}
