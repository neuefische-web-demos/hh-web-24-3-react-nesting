import './styles.css';

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <Button>
        <strong>Ich bin der andere Button</strong>
      </Button>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐶" name="Lucky" description={<p>Super sweet dog</p>} />
      <Animal emoji="🐈" name="Mittens" description={<p>Super sweet cat</p>} />
      <Animal emoji="🐢" name="Archibald" description={<p>Super sweet turtle</p>} />
      <Animal
        emoji="🐣"
        name="Chick Norris"
        description={
          <ul>
            <li>sweet animal</li>
            <li>is yellow</li>
          </ul>
        }
      />
    </main>
  );
}

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}
      <Button>
        {/* // children */}
        Adopt me <strong>{name}</strong>
        <span>{emoji} </span>
        {/* // ⬆️ children */}
      </Button>
      <Butto>
        <h4>Hello world</h4>
      </Butto>
    </>
  );
}

// props {}

function Button({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}
