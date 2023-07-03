import { TraitsResultProps } from '@grapesjs/react';

export default function CustomTraitManager({ traits }: Omit<TraitsResultProps, 'Container'>) {
    console.log('CustomTraitManager', { traits })
    return (
      <div className="gjs-custom-style-manager text-left">
        {traits.map(trait => (
            <div key={trait.getId()}>
                { trait.getLabel() }
            </div>
        ))}
      </div>
    );
  }