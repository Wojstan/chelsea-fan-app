import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Players = () => {
  return (
    <div>

    </div>
  )
}

Players.propTypes = {
  prop: PropTypes
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Players)
