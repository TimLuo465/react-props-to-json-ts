import React, { ReactNode, SyntheticEvent } from "react";

type Types = "primary" | "ghost" | "warning" | "link";

type User = {
  /**
   * @title id
   */
  id: 'L' | 'C';
  /**
   * @title 名称
   */
  name: string;
  /**
   * @title 电话号码
   */
  phone: number;
  /**
   * @title 是否为管理员
   */
  admin: boolean;
}

interface ButtonProps {
  /**
   * moi
   * @title 类型
   * @enumNames ["填充", "虚线", "警告", "链接"]
   * @ui:disabled {{ rootValue.disabled === true }}
   */
  type: Types | 'css';
  /**
   * @title 内容
   */
  content: ReactNode;
  /**
   * @title 禁用
   */
  disabled: boolean;
  /**
   * @title 日期
   * @format date
   */
  date?: string;
  /**
   * @title 用户
   */
  user?: User;
  /**
   * @title 用户组
   */
  users?: User[];
  onClick?: (e: SyntheticEvent) => void;
}


export default class Button extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    type: 'ghost',
    disabled: false,
    user: {
      id: 'C',
      name: 'string',
      phone: 1231232,
      admin: true
    }
  }

  render() {
    const { disabled = false, children } = props;

    return (
      <button disabled= { disabled } > { children } < /button>
    );
  }
}
