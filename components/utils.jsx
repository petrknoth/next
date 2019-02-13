import React from 'react'

export const boolToComponent = (value, Component) => {
  if (typeof value == 'boolean') return value ? Component : React.Fragment
  return value
}

export const getInheritanceChain = Component => {
  if (typeof Component != 'function') return []

  const chain = [Component]
  for (
    let prototype = Object.getPrototypeOf(Component);
    prototype && prototype !== React.Component;
    prototype = Object.getPrototypeOf(prototype)
  ) {
    if (prototype === Object) return []
    chain.push(prototype)
  }

  chain.push(React.Component)

  return chain
}

export const getCompositionChain = element => {
  if (element == null || !React.isValidElement(element)) return []

  const { type: Component, props } = element

  if (typeof Component != 'function') return []

  if (React.isValidElement(props.children))
    return [Component, ...getCompositionChain(props.children)]

  let child
  try {
    child = Component(props)
  } catch (ignored) {
    child = new Component(props)
  }

  return [Component, ...getCompositionChain(child)]
}

export const containerize = (elements, { container: Container, level }) => {
  const elementList = []
  let containerIndex = 0
  let containerList = []

  elements.forEach((element, i) => {
    if (element == null) return

    const elementKey =
      element.key ||
      element.props.id ||
      `${element.type.name || element.type.toString()}-${i}`

    const isContainerable = getCompositionChain(element).some(
      Component => Component.propTypes.container
    )

    if (isContainerable) {
      if (containerList.length > 0) {
        elementList.push(
          React.createElement(
            Container,
            { key: `container-${containerIndex}` },
            containerList
          )
        )
        containerList = []
        containerIndex += 1
      }

      elementList.push(
        React.cloneElement(element, {
          key: elementKey,
          container: Container,
          level: element.props.level || level + 1,
        })
      )
    } else containerList.push(React.cloneElement(element, { key: elementKey }))
  })

  if (containerList.length) {
    elementList.push(
      React.createElement(
        Container,
        { key: `container-${containerIndex}` },
        containerList
      )
    )
  }

  return elementList
}

export const renderIfValid = (Component, props, children) => {
  if (typeof Component != 'string' && typeof Component != 'function')
    return null
  return React.createElement(Component, props, children)
}
