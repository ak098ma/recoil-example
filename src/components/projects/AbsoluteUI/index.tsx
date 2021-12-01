import { memo, Fragment, ChangeEventHandler, useCallback } from 'react'
import { useLoginPopupState } from 'src/recoil/hooks/selectors/login/useLoginPopupState'
import { useLoginFormValue } from 'src/recoil/hooks/selectors/login/useLoginFormValue'
import { useLoginFormController } from 'src/recoil/hooks/actions/login/useLoginFormController'
import { useLoginPopupController } from 'src/recoil/hooks/actions/login/useLoginPopupState'

export const AbsoluteUI = memo(() => {
  const isLoginPopupVisible = useLoginPopupState()
  const { userId, password } = useLoginFormValue()
  const { setUserId, setPassword } = useLoginFormController()
  const { close } = useLoginPopupController()
  const handleUserIdChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => setUserId(event.target.value),
    [setUserId]
  )
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => setPassword(event.target.value), [setPassword])
  const login = () => console.log(`WIP: ${userId} ${password}`)

  return (
    <Fragment>
      {isLoginPopupVisible && (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            event.stopPropagation()
          }}
        >
          <input
            value={userId ?? ''}
            onChange={handleUserIdChange}
            placeholder="Enter userId"
          />
          <input
            value={password ?? ''}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
          <button onClick={login}>Login</button>
          <button onClick={close}>Close</button>
        </form>
      )}
    </Fragment>
  )
})
