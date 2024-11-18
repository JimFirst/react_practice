import React, { useEffect, useMemo, useState } from 'react'
import { CheckList, Popup, SearchBar, Space } from 'antd-mobile'

export default function SelectDropdown({
  value,
  onChange,
  items = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
  ],
}) {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState('A')
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    setSelected(value)
  }, [value])
  const filteredItems = useMemo(() => {
    if (searchText) {
      return items.filter(item => item.label.includes(searchText))
    } else {
      return items
    }
  }, [items, searchText])

  function handleSelect(item) {
    setSelected(item[0])
    setVisible(false)
    onChange(item[0])
  }
  return (
    <div>
      <Space align="center">
        <div
          onClick={() => {
            setVisible(true)
          }}
        >
          {selected ? selected : '请选择'}
        </div>
      </Space>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        destroyOnClose
      >
        <div style={{ padding: '8px' }}>
          <SearchBar
            placeholder="请输入关键词"
            value={searchText}
            onChange={v => {
              setSearchText(v)
            }}
          />
        </div>
        <CheckList
          defaultValue={selected ? [selected] : []}
          onChange={handleSelect}
        >
          {filteredItems.map(item => (
            <CheckList.Item key={item.value} value={item.value}>
              {item.label}
            </CheckList.Item>
          ))}
        </CheckList>
      </Popup>
    </div>
  )
}
