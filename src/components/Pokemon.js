import {
  Card, Image, Tag, List,
} from 'antd';
import getColor from '../color';

const Pokemon = ({ data }) => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        cover={(
          <div className="d-flex justify-content-center">
            <Image
              width={200}
              src={`${data.sprites.front_default}`}
            />
          </div>
    )}
      >
        <Meta
          title={data.name.toUpperCase()}
          className="mb-2"
        />
        <span>
          {data.types.map((type) => {
            const color = getColor(type.type.name);
            return (
              <Tag color={color} key={type.type.url}>
                {type.type.name.toUpperCase()}
              </Tag>
            );
          })}
        </span>
        <List
          dataSource={data.stats}
          renderItem={(item) => (
            <List.Item key={item.stat.name}>
              <List.Item.Meta
                title={item.stat.name}
              />
              <div>{item.base_stat}</div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};
export default Pokemon;
