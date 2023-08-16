function Host(host) {
  if (!host.host) return <div>loading...</div>

  return (
    <div className="host">
      <p>{host.host.name}</p>
      <img src={host.host.picture} alt="Host" />
    </div>
  )
}

export default Host
