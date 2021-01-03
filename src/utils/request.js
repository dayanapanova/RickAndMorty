import axios from 'axios'


export default ({
  successMessage,
  suppressErrors = false,
  url,
  token,
  ...restArgs
}) => {

  return new Promise(async (resolve, reject) => {
    try {
      if (!url.startsWith('http')  && !url.startsWith('/')) {
        throw new Error('Please pass a valid URL!')
      }

      const response = await axios({
        ...restArgs,
        ...(!url.startsWith('http') ? { url: `${process.env.REACT_APP_API}${url}` } : { url: url }),
      })

      if (successMessage) {
        console.log(successMessage)
      }

      resolve(response)

    } catch (err) {
      const { response } = err

      if (!suppressErrors) {
        const errorDetailsFromResponseBody = typeof response === 'object' && response.data && (response.data.message || response.data.error) ? response.data.message || response.data.error : false
        console.log(errorDetailsFromResponseBody);
      }

      reject(err)
    }
  })
}
