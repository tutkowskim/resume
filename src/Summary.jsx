import Group from './Group';
import { summary } from './data';

function Summary() {
  return (
    <Group title="Summary">
      <p>{summary}</p>
    </Group>
  );
}

export default Summary;
