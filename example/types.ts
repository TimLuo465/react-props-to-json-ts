export type Sex = "M" | "F";

export type Address = {
  /**
   * @title 收货人
   */
  receiver?: string;
  /**
   * @title 详细地址
   */
  detail?: string;
};

export type Edu = {
  /**
   * @title 学校
   */
  school?: string;
  /**
   * @title 时间
   * @format date
   */
  date?: string;
};

export default {};
