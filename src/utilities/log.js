// @flow

export default (on: boolean, type: "log" = "log", ...rest: any) => {
  if (on) {
    // eslint-disable-next-line no-console
    console[type](rest);
  }
};
