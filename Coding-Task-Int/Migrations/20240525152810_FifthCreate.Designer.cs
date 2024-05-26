﻿// <auto-generated />
using System;
using Coding_Task_Int.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Coding_Task_Int.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20240525152810_FifthCreate")]
    partial class FifthCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.5");

            modelBuilder.Entity("Coding_Task_Int.Models.FizzBuzzNums", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("End")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Start")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("TimeStamp")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Numbers");
                });
#pragma warning restore 612, 618
        }
    }
}
