import mongoose from 'mongoose';
const connection = {};
async function connect() {
  if (connection.isConnected) {
    console.log('já conectado');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use a conexão anterior');
      return;
    }
    await mongoose.disconnect();
  }
  const url = 'mongodb+srv://Helena_Lannes:3Y6x5xjW2VTG_$A@cluster1.z9y1vyc.mongodb.net/ver?retryWrites=true&w=majority';
  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('nova conexão');
  connection.isConnected = db.connections[0].readyState;
}
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('não desconectado');
    }
  }
}


function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;