function Host({ host }) {
  if (!host) return <div>loading...</div>

  return (
    <div className="host">
      <p>{host.name}</p>
      <img src={host.picture} alt="Host" />
    </div>
  )
}

export default Host
