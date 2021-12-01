import { Fragment, memo } from 'react'
import { useLoginPopupController } from 'src/recoil/hooks/actions/login/useLoginPopupState'
import { useUser } from 'src/recoil/hooks/selectors/useUser'
import { isFailure } from 'src/utils/request'

export const Content = memo(() => {
  const result = useUser()
  const { open } = useLoginPopupController()

  if (isFailure(result)) {
    return (
      <header>
        <button onClick={open}>(^ ω ^) ...wanna Login</button>
      </header>
    )
  } else {
    return (
      <header>
        <Fragment>
          <div>Name: {result.result.name}</div>
          <div>Age: {result.result.age}</div>
        </Fragment>
      </header>
    )
  }
})
