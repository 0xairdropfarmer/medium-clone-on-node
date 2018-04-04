import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default function (Conmponent) {
    class Authenticate extends Component {
        
        componentWillMount() {
            if (!this.props.isAuth) {
                console.log(this.props.isAuth)
                this.context.router.history.push('/')                        
            }
        }

        render () {
            return(
            <Conmponent {...this.props} />
            )
        }   
    }
    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }
    const mapStateToProps = state => {
        return {
            isAuth: state.authUser.isAuth
        }
    }
    return connect(mapStateToProps)(Authenticate)
}