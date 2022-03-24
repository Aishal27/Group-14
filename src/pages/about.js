import React from "react"
import Layout from "../components/Layout/Layout"
import Team from "../components/Team/Team"

export default function About() {
  return (
    <Layout>
      <h1 className="text-warning">Definitive Guide to College Collections is a repository designed to help colleges and universities
       completely manage their entire functioning. It takes care of everything from staff records, student records, library to 
       infrastructural facilities, canteens, and transport.Managing university tasks has essentially been a manual, paper-based process.
       The purpose of this project is to reduce the manual work for managing the library, students, books, issues.</h1>
       <Team/>
    </Layout>
  )
}
