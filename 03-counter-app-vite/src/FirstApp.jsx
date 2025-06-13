import PropTypes from 'prop-types'

const getMessage = (a, b) => {
    return a + b;
}

export const FirstApp = ( { title, subTitle, name } ) => {

  return (
    <>
        <h1 data-testid="test-title">{ title }</h1>
        {/* <code>{ JSON.stringify( newMessage ) }</code> */}
        <p>{ subTitle }</p>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Greg'
}