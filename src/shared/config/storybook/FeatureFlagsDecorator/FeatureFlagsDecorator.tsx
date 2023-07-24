import { Story } from '@storybook/react';
import { FeatureFlags as FeatureFlagsType } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/lib/features';

export const FeatureFlagsDecorator =
    (features: FeatureFlagsType) => (StoryComponent: Story) => {
        setFeatureFlags(features);

        return <StoryComponent />;
    };
