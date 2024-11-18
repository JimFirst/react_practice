import * as ww from '@wecom/jssdk'
import { Button, ImageUploader } from 'antd-mobile'
import { useEffect, useState } from 'react'

// const secret = 'ID8-WgAQaE7KkhbD3xQ9H8TZ48wZodQFvnaZUJs3tKQ';
let isRegister = false
export default function AE() {
  // useEffect(() => {
  //   register();
  // }, []);
  function register() {
    try {
      if (isRegister) {
        return
      }
      ww.register({
        debug: true,
        corpId: 'wwe336a3767bab882b',
        agentId: 1000036,
        jsApiList: [
          'chooseImage',
          'uploadImage',
          'downloadImage',
          'previewImage',
        ],
        getConfigSignature,
        getAgentConfigSignature,
        onConfigSuccess: res => {
          console.log('onConfigSuccess', res)
          isRegister = true
        },
        onConfigFail: err => {
          console.error('onConfigFail', err)
          isRegister = false
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  async function getConfigSignature() {
    const JSAPI_TICKET =
      'HcJ8_IuY07QLuSUx2AO2xoIgOOcF9Esl0UBiv6lcEVHFQQnBLhWesjNejBHJLCT1wCFu5pw_fIX5X-jJTT p51ytuWLVwloOcqW6eKpLs5vndxav8LRHVCAwS6f4H5Vew1kLfyxLUSNKwzXQluRWoqe1kHzl2n674fvZG-QnnZxejOjM127lEW1MtOnJzF80hDihq3e9b8fPvduTVysSg5A'
    console.log(111, ww.getSignature(JSAPI_TICKET))
    return ww.getSignature(JSAPI_TICKET)
  }
  async function getAgentConfigSignature() {
    const JSAPI_TICKET = 'I2M4L96SFo0Qoanat7aihw=='
    console.log(222, ww.getSignature(JSAPI_TICKET))
    return ww.getSignature(JSAPI_TICKET)
  }
  function chooseImage() {
    ww.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      defaultCameraMode: 'batch',
      isSaveToAlbum: true,
      success: function (res) {
        const localIds = res.localIds // 返回选定照片的本地ID列表
        console.log(localIds)
      },
      fail: function (err) {
        console.error(err)
      },
    })
  }
  const [fileList, setFileList] = useState([])
  const mockUpload = async file => {
    console.log(fileList, file)
    return {
      url: URL.createObjectURL(file),
    }
  }
  return (
    <div>
      <Button onClick={chooseImage}>选择图片111</Button>
      <ImageUploader
        value={fileList}
        onChange={setFileList}
        upload={mockUpload}
        multiple
      />
    </div>
  )
}
