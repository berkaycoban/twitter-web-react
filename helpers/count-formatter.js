function countFormatter(count) {
  return Math.abs(count) > 999
    ? Math.sign(count) * (Math.abs(count) / 1000).toFixed(1) + 'K'
    : Math.sign(count) * Math.abs(count)
}

export default countFormatter
