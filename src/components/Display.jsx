export const Display = ({
  valueDisplay,
  handleDisplayChange,
  handleDisplayFocus,
  labelDisplay
}) => {
  return (
    <>
      <label className='labelDisplay'>{labelDisplay}</label>
      <input
        className='display'
        type='text'
        value={valueDisplay}
        onChange={handleDisplayChange}
        onFocus={handleDisplayFocus}
        name={labelDisplay}
      />
    </>
  )
}
