import { describe, expect, it } from 'vitest'
import {add} from '../src'

describe('should', () => {
  it('exported', () => {
    expect(add(1,2)).toEqual(3)
  })
})
