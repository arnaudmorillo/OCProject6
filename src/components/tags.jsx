function Tags({ tags }) {
  if (!tags) return <div>loading...</div>

  const listOfTags = tags.map((tag, index) => (
    <div key={index} className="tags__tag">
      {tag}
    </div>
  ))

  return <div className="tags">{listOfTags}</div>
}

export default Tags
