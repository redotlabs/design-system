import { COMPONENT_MAP } from './const';
import type { ContentBlock } from './types';

function SDUIRenderer({ content }: { content: ContentBlock }) {
  const Comp = COMPONENT_MAP[content.component] || content.component;

  if (!content.children) {
    return <Comp id={content.id} {...content.props} />;
  }

  if (typeof content.children === 'string') {
    return (
      <Comp id={content.id} {...content.props}>
        {content.children}
      </Comp>
    );
  }

  return (
    <Comp id={content.id} {...content.props}>
      {content.children.map((child: ContentBlock) => (
        <SDUIRenderer key={child.id} content={child} />
      ))}
    </Comp>
  );
}

export default SDUIRenderer;
