import { MockupState } from './MockupState'

/**
 * 画面表示に関する State
 */
export interface DisplayState {
  // モックアップ画面の現在の状態
  mockup: MockupState

  // MockupState を更新する
  setMockupState(state: MockupState): Promise<void>

  // モックアップを閉じる
  closeMockup(): Promise<void>
}
