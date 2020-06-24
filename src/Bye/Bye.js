import React from 'react'
import PropTypes from 'prop-types'

Bye.propTypes = {
    /** 보여주고 싶은 이름 */
    name: PropTypes.string
}

function Bye({ name }) {
    return <p>안녕히 가세요, {name}</p>
}

export default Bye
