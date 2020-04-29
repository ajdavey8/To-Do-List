const delay = (amount: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, amount);
  });
}

export default delay