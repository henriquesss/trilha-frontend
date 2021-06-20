import React from 'react'
import { action } from '@storybook/addon-actions'

import UIButton from '../components/UIButton'

export default {
    title: 'UIButton',
    component: UIButton
}

export const Text = () => <UIButton onClick={action('clicked')}> Hello Button </UIButton>

export const Emoji = () => (
    <UIButton onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            🤙
        </span>
    </UIButton>
)

