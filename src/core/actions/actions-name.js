import constants from 'core/types'
import contract from 'truffle-contract'
import AmazingDrac from 'contracts/AmazingDrac.json'

export function checkIfExists(name) {
  return (dispatch, getState) => {
    const { web3Provider } = getState().provider
    const AmazingDracContract = contract(AmazingDrac)

    AmazingDracContract.setProvider(web3Provider.currentProvider)
    AmazingDracContract.defaults({ from: web3Provider.eth.defaultAccount })

    return new Promise((resolve, reject) => {
      AmazingDracContract.deployed().then((ad) => {
        return ad.checkIfExists(name)
      }).then((result) => {
        resolve(result)
      })
    })
      .then((result) => {
        dispatch((() => {
          return {
            type: constants.CHECK_IF_NAME_EXISTS,
            result
          }
        })())
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  }
}
